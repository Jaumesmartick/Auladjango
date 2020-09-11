from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from django.core.mail import send_mail
from django.template.loader import render_to_string
from rest_framework.views import APIView

from .models import ValidateUser
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ValidationSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user.is_active = False
        _, token = AuthToken.objects.create(user)

        # Acceso de aplicaciones poco seguras (configuración gmail)
        urlValidate = "http://localhost:8000/#/validate/%s" % token
        msg_html = render_to_string('validate.html', {'url': urlValidate})
        send_mail(
            'Confirmar Registro de Usuario',
            '',
            'jaume.fabregat.97@gmail.com',
            [user.email],
            fail_silently=False,
            html_message=msg_html
        )
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })

# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })

# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# Validation API
class ValidateAPI(APIView):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ValidationSerializer

    def get(self, request, format=None):
        print("ENTRA")
        queryset = ValidateUser.objects.all()
        is_validated = self.request.query_params.get('isValidated', None)
        print("ENTRA2")
        if is_validated is not None:
            queryset = queryset.filter(isValidated=is_validated)
            print(queryset)
        return Response({'isValidated': True})


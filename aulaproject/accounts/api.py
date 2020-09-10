from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user.is_active = False

        # Acceso de aplicaciones poco seguras (configuración gmail)
        msg_html = render_to_string('validate.html')
        send_mail(
            'Confirmar Registro de Usuario',
            'Por favor, acceda al link que se presenta a continuación para confirmar el registro de la cuenta. /n'
            'https://localhost:8000',
            'jaume.fabregat.97@gmail.com',
            [user.email],
            fail_silently=False,
            html_message=msg_html
        )
        _, token = AuthToken.objects.create(user)
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


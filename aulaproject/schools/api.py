from .models import School, Grade
from rest_framework import viewsets, permissions
from .serializers import SchoolSerializer, GradeSerializer


class SchoolViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = SchoolSerializer

    def get_queryset(self):
        queryset = School.objects.all()
        codigo_postal = self.request.query_params.get('codigo_postal', None)
        if codigo_postal is not None:
            queryset = queryset.filter(codigo_postal=codigo_postal)
        return queryset

    # def perform_create(self, serializer):
    #     serializer.save()
    # en el caso que necesitemos crear colegios desde la api

class GradeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = GradeSerializer

    def get_queryset(self):
        queryset = Grade.objects.all()
        return queryset
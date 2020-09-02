from .models import School
from rest_framework import viewsets, permissions
from .serializers import SchoolSerializer


class SchoolViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SchoolSerializer

    def get_queryset(self):
        return self.request.user.schools.all()

    # def perform_create(self, serializer):
    #     serializer.save()
    # en el caso que necesitemos crear colegios desde la api

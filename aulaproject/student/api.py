from .models import Student
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer


#Student Viewset (endpoint to make requests)
class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = StudentSerializer

    def get_queryset(self):
        return self.request.user.students.all()

    def perform_create(self, serializer):
        serializer.save(tutor=self.request.user)



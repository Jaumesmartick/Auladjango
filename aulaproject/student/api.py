from .models import Student
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer


#Student Viewset (endpoint to make requests)
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StudentSerializer

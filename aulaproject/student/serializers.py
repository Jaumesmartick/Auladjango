from rest_framework import serializers
from .models import Student

#Utiliza un modelo para crear archivos JSON

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__' #includes all fields in the model

from rest_framework import serializers
from .models import School

#Utiliza un modelo para crear archivos JSON

class SchoolSerializer(serializers.ModelSerializer):

    class Meta:
        model = School
        fields = '__all__' #includes all fields in the model
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    school = models.IntegerField()
    grade = models.IntegerField()
    tutor = models.ForeignKey(User, related_name="students", on_delete=models.CASCADE, null=True)
    log_code = models.CharField(max_length=50)
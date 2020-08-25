from django.db import models

# Create your models here.

class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    id_school = models.IntegerField()
    id_grade = models.IntegerField()
    id_tutor = models.IntegerField()
    log_code = models.CharField(max_length=50)
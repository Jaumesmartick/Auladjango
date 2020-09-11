from django.db import models
from django.contrib.auth.models import User

class ValidateUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    isValidated = models.CharField(max_length=100)

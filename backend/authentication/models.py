from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    user_bio = models.CharField(max_length=255)
    user_reputation = models.DecimalField(max_digits=3, decimal_places=1)
    is_verified = models.BooleanField()
    is_admin = models.BooleanField()
    user_photo = models.CharField(max_length=100)
    user_theme = models.CharField(max_length=50)

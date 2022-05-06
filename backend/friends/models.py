from django.db import models
from authentication.models import User


class Friends(models.Model):
    friends = models.ManyToManyField(User)
    user = models.ForeignKey(User, related_name="owner", on_delete=models.CASCADE)

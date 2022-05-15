from django.db import models
from authentication.models import User


class Friends(models.Model):
    denied = models.ManyToManyField(User, related_name="denied")
    pending = models.ManyToManyField(User, related_name="pending")
    friends = models.ManyToManyField(User, related_name="approved")
    user = models.OneToOneField(User, related_name="owner", on_delete=models.DO_NOTHING)


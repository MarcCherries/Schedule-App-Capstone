from django.db import models
from authentication.models import User
from events.models import Event

class Reputation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    eligible_voters = models.ManyToManyField(User)

from django.db import models
from authentication.models import User
from locations.models import Location

class Event(models.Model):
    user = models.ManyToManyField(User)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    event_type = models.CharField(max_length=50)
    event_description = models.CharField(max_length=255)
    event_specialInstructions = models.CharField(max_length=255)
    experience_level = models.CharField(max_length=50)

   

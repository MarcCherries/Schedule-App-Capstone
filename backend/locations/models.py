from django.db import models

class Location(models.Model):
    location_name = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    location_info = models.CharField(max_length=255)

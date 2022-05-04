from django.db import models
from authentication.models import User  
from events.models import Event

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    comment_text = models.CharField(max_length=255)

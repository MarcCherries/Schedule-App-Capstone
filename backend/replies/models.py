from django.db import models
from authentication.models import User
from comments.models import Comment

class Reply(models.Model):
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply_text = models.CharField(max_length=255)
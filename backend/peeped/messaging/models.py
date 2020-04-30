from django.db import models

class Message(models.Model):
    sender = models.CharField(max_length=15)
    receiver = models.CharField(max_length=15)
    subject = models.CharField(max_length=50)
    message = models.TextField()
    timeSent = models.DateTimeField(auto_now_add=True)

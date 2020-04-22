from django.db import models

class Message(models.Model):
    sender = models.CharField(max_length=15)
    receiver = models.CharField(max_length=15)
    dateSent = models.DateTimeField(auto_now_add=True)
    dateReceive = models.DateTimeField()
    subject = models.CharField(max_length=50)
    body = models.TextField(blank=True)
    
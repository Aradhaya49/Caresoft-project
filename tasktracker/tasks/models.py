from django.db import models

class Task(models.Model):

    STATUS=[('OPEN','OPEN'),
    ('IN_PROGRESS','IN_PROGRESS'),
    ('COMPLETED','COMPLETED')]

    title = models.CharField(max_length=200)
    description = models.TextField()
    status = models.CharField(max_length=20,choices=STATUS,default='OPEN')
    

# Create your models here.

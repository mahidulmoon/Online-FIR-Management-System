from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    contact = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    thana = models.CharField(max_length=30)
    profile_img = models.ImageField(upload_to='images/',default=None,blank=True)
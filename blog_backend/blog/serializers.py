from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at', 'updated_at']


class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id","first_name","last_name","email","mobilenumber","gender","password","username")

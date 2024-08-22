from rest_framework import serializers
from .MovieModel import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Movie
        fields = ['movieTitle','isRentable','isHD','price']
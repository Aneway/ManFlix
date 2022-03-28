from rest_framework import serializers
from .models import *

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        many = True #para converter varios de uma vez, senao converte so uma. Retornar tudo em um array.
        model = Categoria #qual tabela que ele vai pegar! Nome do model
        fields = '__all__' #pra converter todos dentro de model

class FilmeSerializer(serializers.ModelSerializer):
    class Meta:
        many = True 
        model = Filme
        fields = '__all__' 

class AssinaturaSerializer(serializers.ModelSerializer):
    class Meta:
        many = True 
        model = Assinatura
        fields = '__all__' 

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        many = True 
        model = Usuarios
        fields = '__all__' 


class FavoritosSerializer(serializers.ModelSerializer):
    class Meta:
        many = True 
        model = Favoritos
        fields = '__all__' 





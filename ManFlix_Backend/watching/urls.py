from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("categoria/", CategoriaAPIView.as_view(), name='categoria'),
    path('categoria/<int:pk>/', CategoriaAPIView.as_view(), name='categoriaParameters'),

    path("filme/", FilmeAPIView.as_view(), name='filme'),
    path('filme/<int:pk>/', FilmeAPIView.as_view(), name='filmeParameters'),

    path("assinatura/", AssinaturaAPIView.as_view(), name='assinatura'),
    path('assinatura/<int:pk>/', AssinaturaAPIView.as_view(), name='assinaturaParameters'),

    path("usuarios/", UsuariosAPIView.as_view(), name='usuarios'),
    path('usuarios/<int:pk>/', UsuariosAPIView.as_view(), name='usuariosParameters'),

    path("favoritos/", FavoritosAPIView.as_view(), name='favoritos'),
    path('favoritos/<int:pk>/', FavoritosAPIView.as_view(), name='favoritosParameters'),
]
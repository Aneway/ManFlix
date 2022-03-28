from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponseRedirect
from rest_framework.permissions import IsAuthenticated

class CategoriaAPIView(APIView):
#API Usuarios
# permission_classes = (IsAuthenticated,)
    def get(self, request, pk=''):
        if pk == '': 
            categoria = Categoria.objects.all() 
            serializer = CategoriaSerializer(categoria, many=True) 
            return Response(serializer.data)

        else:
            categoria = Categoria.objects.get(id=pk) 
            serializer = CategoriaSerializer(categoria)
            return Response(serializer.data)

    def post(self, request):
            serializer = CategoriaSerializer(data=request.data, many=True) 
            serializer.is_valid(raise_exception=True) 
            serializer.save() 
            return Response({"msg": "Inserido com sucesso"})
            
    def put(self, request, pk=''):
            categoria = Categoria.objects.get(id=pk)
            serializer = CategoriaSerializer(categoria, data=request.data) 
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
    
    def delete(self, request, pk=''):
            categoria = Categoria.objects.get(id=pk)
            categoria.delete()
            return Response({"msg": "Apagado com sucesso"})

############################################################################

class FilmeAPIView(APIView):
#API Usuarios
# permission_classes = (IsAuthenticated,)
    def get(self, request, pk=''):
        if pk == '': 
            filme = Filme.objects.all() 
            serializer = FilmeSerializer(filme, many=True) 
            return Response(serializer.data)

        else:
            filme = Filme.objects.get(id=pk) 
            serializer = FilmeSerializer(filme) 
            return Response(serializer.data)

    def post(self, request):
            serializer = FilmeSerializer(data=request.data, many=True) 
            serializer.is_valid(raise_exception=True) 
            serializer.save() 
            return Response({"msg": "Inserido com sucesso"})
    
    def put(self, request, pk=''): 
            filme = Filme.objects.get(id=pk) 
            serializer = FilmeSerializer(filme, data=request.data) 
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
    
    def delete(self, request, pk=''):
            filme = Filme.objects.get(id=pk)
            filme.delete()
            return Response({"msg": "Apagado com sucesso"})

############################################################################

class AssinaturaAPIView(APIView):
#API Usuarios
# permission_classes = (IsAuthenticated,)
    def get(self, request, pk=''):
        if pk == '': 
            assinatura = Assinatura.objects.all() 
            serializer = AssinaturaSerializer(assinatura, many=True) 
            return Response(serializer.data)

        else:
            assinatura = Assinatura.objects.get(id=pk) 
            serializer = AssinaturaSerializer(assinatura) 
            return Response(serializer.data)

    def post(self, request):
            serializer = AssinaturaSerializer(data=request.data, many=True) 
            serializer.is_valid(raise_exception=True) 
            serializer.save() 
            return Response({"msg": "Inserido com sucesso"})

    def put(self, request, pk=''): 
            assinatura = Assinatura.objects.get(id=pk) 
            serializer = AssinaturaSerializer(assinatura, data=request.data) 
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
    
    def delete(self, request, pk=''):
            assinatura = Assinatura.objects.get(id=pk)
            assinatura.delete()
            return Response({"msg": "Apagado com sucesso"})

############################################################################

class UsuariosAPIView(APIView):
#API Usuarios
# permission_classes = (IsAuthenticated,)
    def get(self, request, pk=''):
        if pk == '': 
            usuarios = Usuarios.objects.all() 
            serializer = UsuariosSerializer(usuarios, many=True) 
            return Response(serializer.data)

        else:
            usuarios = Usuarios.objects.get(id=pk)
            serializer = UsuariosSerializer(usuarios) 
            return Response(serializer.data)

    def post(self, request):
            serializer = UsuariosSerializer(data=request.data, many=True) 
            serializer.is_valid(raise_exception=True) 
            serializer.save() 
            return Response({"msg": "Inserido com sucesso"})
    
    def put(self, request, pk=''): 
            usuarios = Usuarios.objects.get(id=pk) 
            serializer = UsuariosSerializer(usuarios, data=request.data) 
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
    
    def delete(self, request, pk=''):
            usuarios = Usuarios.objects.get(id=pk)
            usuarios.delete()
            return Response({"msg": "Apagado com sucesso"})

############################################################################

class FavoritosAPIView(APIView):
#API Usuarios
# permission_classes = (IsAuthenticated,)
    def get(self, request, pk=''):
        if pk == '': 
            favoritos = Favoritos.objects.all() 
            serializer = FavoritosSerializer(favoritos, many=True) 
            return Response(serializer.data)

        else:
            favoritos = Favoritos.objects.get(id=pk)
            serializer = FavoritosSerializer(favoritos) 
            return Response(serializer.data)

    def post(self, request):
            serializer = FavoritosSerializer(data=request.data, many=True) 
            serializer.is_valid(raise_exception=True) 
            serializer.save() 
            return Response({"msg": "Inserido com sucesso"})
    
    def put(self, request, pk=''): 
            favoritos = Favoritos.objects.get(id=pk) 
            serializer = FavoritosSerializer(favoritos, data=request.data) 
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
    
    def delete(self, request, pk=''):
            favoritos = Favoritos.objects.get(id=pk)
            favoritos.delete()
            return Response({"msg": "Apagado com sucesso"})

            


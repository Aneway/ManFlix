from django.db import models
from django.utils import timezone

# Create your models here.
from django.db import models
from django.utils import timezone

class Categoria(models.Model):
    nome = models.CharField(max_length=30)

    def __str__(self):
        return self.nome

class Filme(models.Model):
    nome = models.CharField(max_length=55)
    ano_lancamento = models.CharField(max_length=5)
    categoriaFk = models.ForeignKey(Categoria,on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class Assinatura(models.Model):
    nome = models.CharField(max_length=30)
    valor =  models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class Usuarios(models.Model):
    nome = models.CharField(max_length=55)
    email = models.CharField(max_length=80)
    assinaturaFk = models.ForeignKey(Assinatura,on_delete=models.CASCADE)

    def __str__(self):
        return self.nome

class Favoritos(models.Model):
    filmeFk =  models.ForeignKey(Filme,on_delete=models.CASCADE)
    usuarioFk = models.ForeignKey(Usuarios,on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
        



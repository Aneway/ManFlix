from django.contrib import admin
from .models import *

# Register your models here.
class detCategoria(admin.ModelAdmin):
    list_display = ('id','nome')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Categoria, detCategoria)

class detFilme(admin.ModelAdmin):
    list_display = ('id','nome','ano_lancamento','categoriaFk')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Filme, detFilme)

class detAssinatura(admin.ModelAdmin):
    list_display = ('id','valor')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Assinatura, detAssinatura)

class detUsuarios(admin.ModelAdmin):
    list_display = ('id','nome','email','assinaturaFk')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Usuarios, detUsuarios)

class detFavoritos(admin.ModelAdmin):
    list_display = ('id','filmeFk','usuarioFk')
    list_display_links = ('id',)
    search_fields = ('nome',)
    list_per_page = 10

admin.site.register(Favoritos, detFavoritos)

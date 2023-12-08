from django.urls import path

from .views import ProductAPI, CategoryAPI

urlpatterns = [
    path('product_view/', ProductAPI.as_view()),
    path('category/', CategoryAPI.as_view())
]

from django.urls import path

from .views import ProductAPI

urlpatterns = [
    path('product_view/', ProductAPI.as_view())
]
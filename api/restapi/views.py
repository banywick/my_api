from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductAPI(ListAPIView):
    queryset = Product.objects.prefetch_related('category')
    serializer_class = ProductSerializer



class CategoryAPI(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


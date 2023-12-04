from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product
from .serializers import ProductSerializer


class ProductAPI(ListAPIView):
    queryset = Product.objects.prefetch_related('category')
    serializer_class = ProductSerializer


from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductListAPI(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer




class ProductFilterAPI(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        queryset = Product.objects.filter(category_id=id)
        return queryset





class CategoryAPI(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# class FilterCatAPI(ListAPIView):
#     def get(self, request):
#         id = request.query_params.get('id')
#         print(request.query_params)
#         product = Product.objects.get(id=id)
#         serializer = ProductSerializer(product)
#         Response(data=serializer.data, status=status.HTTP_200_OK)

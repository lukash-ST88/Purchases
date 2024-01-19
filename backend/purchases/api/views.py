from django.shortcuts import render
from rest_framework import generics
from .models import Purchase, Category
from .serializers import PurchaseListSerializer, CategorySerializer, PurchaseCreateSerializer


class PurchaseListView(generics.ListAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseListSerializer


class PurchaseCreateView(generics.CreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseCreateSerializer


class PurchaseSortedListView(generics.ListAPIView):
    serializer_class = PurchaseListSerializer

    def get_queryset(self):
        return Purchase.objects.all().order_by(self.kwargs['sort'])


class PurchaseFilteredListView(generics.ListAPIView):
    serializer_class = PurchaseListSerializer

    def get_queryset(self):
        return Purchase.objects.filter(category_id=self.kwargs['pk'])


class PurchaseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseListSerializer


class CategoryCreate(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

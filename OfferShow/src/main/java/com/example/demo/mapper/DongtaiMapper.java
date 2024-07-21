package com.example.demo.mapper;

import java.util.ArrayList;

import com.example.demo.bean.recuit;

public interface DongtaiMapper {
	
	// 查看校招类型的招聘信息
	public ArrayList<recuit> getXiaoZhao();
	
	// 查看实习类型的招聘信息
	public ArrayList<recuit> getShiXi();
	
	// 查看热门的招聘信息
	public ArrayList<recuit> getReMen();
}

package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.recuit;
import com.example.demo.mapper.DongtaiMapper;

// 薪资动态导航栏
@RestController
public class DongtaiController {
	
	@Autowired
	DongtaiMapper dongtaiMapper;
	
	// 获取校招方面的动态
	@GetMapping("dongtai/xiaozhao")
	public ArrayList<recuit> getXiaozhao(){
		return dongtaiMapper.getXiaoZhao();
	}
	
	// 获取实习方面的动态
	@GetMapping("dongtai/shixi")
	public ArrayList<recuit> getShixi(){
		return dongtaiMapper.getShiXi();
	}
	
	// 获取最近的热门动态
	@GetMapping("dongtai/remen")
	public ArrayList<recuit> getRemen(){
		return dongtaiMapper.getReMen();
	}
}

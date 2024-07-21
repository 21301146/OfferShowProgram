package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.*;
import com.example.demo.mapper.RecuitMapper;

// 薪资查询导航栏
@RestController
public class ReciutController {
	
	//@RequestMapping("/chaxun")

	@Autowired
	RecuitMapper recuitMapper;
	
	// 点击搜索框，实现部分检索和分页查询
	@GetMapping("chaxun/query")
	public ArrayList<recuit> getRecuit(@RequestParam String name,@RequestParam int page,@RequestParam int pageSize){
		return recuitMapper.getRecuitByName(name,page,pageSize);
	}
	
	// 获取今日新增公司的数据六宫格
	@GetMapping("chaxun/xinzeng")
	public ArrayList<xinzeng> getXinzeng(){
		return recuitMapper.getXinZeng();
	}
	
	// 子页面 近期爆料
	@GetMapping("chaxun/nav/recentbaoliao")
	public ArrayList<recentbaoliao> getRecentbaoliao(){
		return recuitMapper.getRecentBaoliao();	
	}
	
	// 子页面 金融专栏
	@GetMapping("chaxun/nav/jinrong")
	public ArrayList<jinrong> getJinrong(){
		return recuitMapper.getJinRong();	
	}
	
	// 子页面 研究生补助
	@GetMapping("chaxun/nav/yanjiusheng")
	public ArrayList<yanjiusheng> getYanjiusheng(){
		return recuitMapper.getYanJiuSheng();
	}
	
	// 子页面 汽车/自动驾驶
	@GetMapping("chaxun/nav/qiche")
	public ArrayList<qiche> getQiche(){
		return recuitMapper.getQiChe();
	}
	
	// 子页面 薪资快讯
	@GetMapping("chaxun/nav/xinzikuaixun")
	public ArrayList<xinzikuaixun> getXinzikuaixun(){
		return recuitMapper.getXinZiKuaiXun();
	}
	
	// 子页面 Offer选择
	@GetMapping("chaxun/nav/offerxuanze")
	public ArrayList<offerxuanze> getOfferxaunze(){
		return recuitMapper.getOfferXuanZe();
	}
	
	// 子页面 求职避坑
	@GetMapping("chaxun/nav/qiuzhi")
	public ArrayList<qiuzhi> getQiuzhi(){
		return recuitMapper.getQiuZhi();
	}
}

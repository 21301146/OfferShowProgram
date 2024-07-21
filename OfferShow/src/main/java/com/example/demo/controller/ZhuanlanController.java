package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.hr;
import com.example.demo.bean.jinrong;
import com.example.demo.bean.offerxuanze;
import com.example.demo.bean.qiche;
import com.example.demo.bean.qiuzhi;
import com.example.demo.bean.recuit;
import com.example.demo.bean.xinzikuaixun;
import com.example.demo.bean.yanjiusheng;
import com.example.demo.mapper.ZhuanlanMapper;

@RestController
public class ZhuanlanController {

	@Autowired
	ZhuanlanMapper zhuanlanMapper;
	
	// 获取发现专栏信息
	@GetMapping("zhuanlan/faxian")
	public ArrayList<recuit> getFaxian(){
		return zhuanlanMapper.getFaXian();
	}
	
	// 薪资快讯
	@GetMapping("zhuanlan/xinzikuaixun")
	public ArrayList<xinzikuaixun> getXinzikuaixun(){
		return zhuanlanMapper.getXinZiKuaiXun();
	}
	
	// Offer选择
	@GetMapping("zhuanlan/offerxuanze")
	public ArrayList<offerxuanze> getOfferxaunze(){
		return zhuanlanMapper.getOfferXuanZe();
	}
	
	// 求职避坑
	@GetMapping("zhuanlan/qiuzhi")
	public ArrayList<qiuzhi> getQiuzhi(){
		return zhuanlanMapper.getQiuZhi();
	}
	
	// HR专场
	@GetMapping("zhuanlan/hr")
	public ArrayList<hr> getHRZhuanchang(){
		return zhuanlanMapper.getHRZhuanChang();
	}
	
	// 金融专栏
	@GetMapping("zhuanlan/jinrong")
	public ArrayList<jinrong> getJinrong(){
		return zhuanlanMapper.getJinRong();	
	}
	
	// 研究生补助
	@GetMapping("zhuanlan/yanjiusheng")
	public ArrayList<yanjiusheng> getYanjiusheng(){
		return zhuanlanMapper.getYanJiuSheng();
	}
	
	// 汽车/自动驾驶
	@GetMapping("zhuanlan/qiche")
	public ArrayList<qiche> getQiche(){
		return zhuanlanMapper.getQiChe();
	}
}

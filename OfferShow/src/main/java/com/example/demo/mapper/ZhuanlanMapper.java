package com.example.demo.mapper;

import java.util.ArrayList;

import com.example.demo.bean.hr;
import com.example.demo.bean.jinrong;
import com.example.demo.bean.offerxuanze;
import com.example.demo.bean.qiche;
import com.example.demo.bean.qiuzhi;
import com.example.demo.bean.recuit;
import com.example.demo.bean.xinzikuaixun;
import com.example.demo.bean.yanjiusheng;

public interface ZhuanlanMapper {
	
	// 查看求职专栏
	// 发现
	public ArrayList<recuit> getFaXian();
	
	// 薪资快讯
	public ArrayList<xinzikuaixun> getXinZiKuaiXun();
	
	// offer选择
	public ArrayList<offerxuanze> getOfferXuanZe();
	
	// 求职避坑
	public ArrayList<qiuzhi> getQiuZhi();
	
	//查看薪资专栏
	//HR专场
	public ArrayList<hr> getHRZhuanChang();
	
	// 金融专栏
	public ArrayList<jinrong> getJinRong();
	
	// 研究生补助
	public ArrayList<yanjiusheng> getYanJiuSheng();
	
	// 自动驾驶
	public ArrayList<qiche> getQiChe();

}

package com.example.demo.mapper;

import java.util.ArrayList;

import com.example.demo.bean.*;

public interface RecuitMapper {
    // 点击搜索框输入职位名
	// Todo: 组合查询
	public ArrayList<recuit> getRecuitByName(String name,int page,int pageSize);
	
    // 查看今日新增
	public ArrayList<xinzeng> getXinZeng();
	
	// 根据选择nav的title来查看相应的信息
    // 近期爆料
	public ArrayList<recentbaoliao> getRecentBaoliao();
	
	// 金融专栏
	public ArrayList<jinrong> getJinRong();
	
	// 研究生补助
	public ArrayList<yanjiusheng> getYanJiuSheng();
	
	// 自动驾驶
	public ArrayList<qiche> getQiChe();
	
	// 薪资快讯
	public ArrayList<xinzikuaixun> getXinZiKuaiXun();
	
	// offer选择
	public ArrayList<offerxuanze> getOfferXuanZe();
	
	// 求职避坑
	public ArrayList<qiuzhi> getQiuZhi();
   
}

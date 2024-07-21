package com.example.demo.mapper;

import java.util.ArrayList;

import com.example.demo.bean.baoliao;
import com.example.demo.bean.huatishoucang;
import com.example.demo.bean.message;
import com.example.demo.bean.user;
import com.example.demo.bean.xinzishoucang;
import com.example.demo.bean.zhaoren;

public interface WodeMapper {

	// 获取用户信息
	public user getUserInfo();
	
	// 更新用户信息
	public void updateUserInfo(String nicheng, String qianming);
	
	// 查看我的消息
	public ArrayList<message> getXiaoXi();
	
	// 查看我的爆料
	public ArrayList<baoliao> getBaoLiao();
	
	// 查看我的投稿（招人）
	public ArrayList<zhaoren> getZhaoRen();
	
	// 查看我的收藏
	// 查看薪资收藏
	public ArrayList<xinzishoucang> getXinZiShouCang();
	
	// 查看话题收藏
	public ArrayList<huatishoucang> getHuaTiShouCang();
	
	// 发布招聘信息
	public void insertZhaoRen(String companyName,String job,String city,String wage,String type,String qualification,String profession,String detail);

	// 删除消息
	public void deleteXiaoXi(int[] ids);

	// 删除我的爆料
	public void deleteBaoLiao(int[] ids);

	// 删除我的投稿（招人）
	public void deleteZhaoRen(int[] ids);

	// 发布我的投稿（招人）
	public void fabuZhaoRen(int[] ids);

	// 取消薪资收藏
	public void deleteXinZi(String[] details);

	//取消话题收藏
	public void deleteHuati(String[] details);
	
}

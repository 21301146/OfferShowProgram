package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.baoliao;
import com.example.demo.bean.huatishoucang;
import com.example.demo.bean.message;
import com.example.demo.bean.user;
import com.example.demo.bean.xinzishoucang;
import com.example.demo.bean.zhaoren;
import com.example.demo.mapper.WodeMapper;

// 个人中心
@RestController
public class WodeController {
	
	@Autowired
	WodeMapper wodeMapper;
	
	// 获取用户的昵称和签名
	@GetMapping("wo/user")
	public user getUser() {
		return wodeMapper.getUserInfo();
	}
	
	// 更新用户的昵称和签名
	@PutMapping("wo/update")
	public void updateUser(@RequestBody user u) {
		wodeMapper.updateUserInfo(u.getNicheng(),u.getQianming());
	}
	
	// 获取“我的消息”
	@GetMapping("wo/xiaoxi")
	public ArrayList<message> getXiaoxi(){
		return wodeMapper.getXiaoXi();
	}
	
	// 删除或批量删除“我的消息”
	@DeleteMapping("xiaoxi/delete")
	public void deleteXiaoxi(@RequestParam int[] ids) {
		wodeMapper.deleteXiaoXi(ids);
	}
	
	// 获取“我的爆料”
	@GetMapping("wo/baoliao")
	public ArrayList<baoliao> getBaoliao(){
		return wodeMapper.getBaoLiao();
	}
	
	// 删除或批量删除“我的爆料”
	@DeleteMapping("baoliao/delete")
	public void deleteBaoliao(@RequestParam int[] ids) {
		wodeMapper.deleteBaoLiao(ids);
	}
	
	// 获取“我的投稿”
	@GetMapping("wo/zhaoren")
	public ArrayList<zhaoren> getZhaoren(){
		return wodeMapper.getZhaoRen();
	}
	
	// 删除或批量删除“我的投稿”
	@DeleteMapping("zhaoren/delete")
	public void deleteZhaoren(@RequestParam int[] ids) {
		wodeMapper.deleteZhaoRen(ids);
	}
	
	// 获取”我的收藏”当中的薪资收藏
	@GetMapping("wo/xinzi")
	public ArrayList<xinzishoucang> getXinzishocuang(){
		return wodeMapper.getXinZiShouCang();
	}
	
	// 删除或批量删除”我的收藏”当中的薪资收藏
	@DeleteMapping("xinzi/delete")
	public void deleteXinzi(@RequestParam String[] details) {
		wodeMapper.deleteXinZi(details);
	}
	
	// 获取”我的收藏”当中的话题收藏
	@GetMapping("wo/huati")
	public ArrayList<huatishoucang> getHuatishocuang(){
		return wodeMapper.getHuaTiShouCang();
	}
	
	// 删除或批量删除”我的收藏”当中的话题收藏
	@DeleteMapping("huati/delete")
	public void deleteHuati(@RequestParam String details[]) {
		wodeMapper.deleteHuati(details);
	}
	
	// 填写“我要招人”信息
	@PostMapping("wo/insert")
	public void insertZhaoren(@RequestBody zhaoren zh) {		
//		System.out.print(zh.getCompanyName());	
		wodeMapper.insertZhaoRen(zh.getCompanyName(), zh.getJob(), zh.getCity(), zh.getWage(), zh.getType(), zh.getQualification(), zh.getProfession(), zh.getDetail());	
	}
	
	// 发布“我要招人”信息
	@PostMapping("zhaoren/fabu")
	public void fabuZhaoren(@RequestParam int[] ids) {
		wodeMapper.fabuZhaoRen(ids);
		wodeMapper.deleteZhaoRen(ids);
	}
}

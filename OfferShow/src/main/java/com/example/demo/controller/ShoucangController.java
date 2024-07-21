package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.huatishoucang;
import com.example.demo.bean.xinzishoucang;
import com.example.demo.mapper.ShoucangMapper;

// 收藏子页面
@RestController
public class ShoucangController {
	
	@Autowired
	ShoucangMapper shoucangMapper;
	
	// 添加到薪资收藏
	@PostMapping("xinzishoucang/insert")
	public boolean insertXinzishoucang(@RequestBody xinzishoucang xin) {
//		System.out.println(xin.getCity());
//		System.out.println(xin.getReliability());
		return shoucangMapper.insertXinZiShouCang(xin.getCompanyName(),xin.getUniversityName(),xin.getJob(),xin.getMajor(),xin.getCity(),xin.getWage(),xin.getQualification(),xin.getType(),xin.getDetail(),xin.getProfession(),xin.getReliability());	
	}
	
	// 从薪资收藏中删除
	@DeleteMapping("xinzishoucang/delete")
	public void deleteXinzishoucang(@RequestParam String qualification,@RequestParam String detail) {
//		System.out.println(qualification);
//		System.out.println(detail);
		shoucangMapper.deleteXinZiShouCang(qualification,detail);	
	}
	
	// 添加到话题收藏
	@PostMapping("huatishoucang/insert")
	public boolean insertHuatishoucang(@RequestBody huatishoucang hua) {
		return shoucangMapper.insertHuaTiShouCang(hua.getCompanyName(),hua.getCompanyName1(),hua.getCompanyName2(),hua.getJob(),hua.getDetail());	
	}
	
	// 从话题收藏中删除
	@DeleteMapping("huatishoucang/delete")
	public void deleteHuatishoucang(@RequestParam String detail) {
//		System.out.println(detail);
		shoucangMapper.deleteHuaTiShouCang(detail);	
	}
	

}

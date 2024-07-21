package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.baoliao;
import com.example.demo.mapper.BaoliaoMapper;

//import net.sf.json.JSONObject;

// 薪资爆料导航栏
@RestController
public class BaoliaoController {
	@Autowired
	BaoliaoMapper baoliaoMapper;
	
	@PostMapping("baoliao/insert")
	public boolean insertBaoliao(@RequestBody baoliao bl) {
		
		System.out.print(bl.getCompanyName());
		
		return baoliaoMapper.insertBaoliao(bl.getCompanyName(), bl.getJob(), bl.getCity(), bl.getWage(), bl.getLowWage(), bl.getHighWage(), bl.getType(), bl.getQualification(), bl.getProfession(), bl.getDetail());
		
	}
	
}

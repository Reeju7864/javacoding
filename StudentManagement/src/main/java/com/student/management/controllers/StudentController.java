package com.student.management.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.student.management.entities.Student;
import com.student.management.services.StudentService;

@Controller
public class StudentController {
	@Autowired
	StudentService service;
	@PostMapping("/addStudent")
	public String addStudent(@ModelAttribute Student st,Model model)
	{
		service.addStudent(st);
	   model.addAttribute("msg","Student Added Successfully!");
		return "index";
	}
	@GetMapping("/searchStudent")
	public String searchStudent(@RequestParam int roll, Model model)
	{
		Student st=service.searchStudent(roll);
		model.addAttribute("student", st);
		return "displayStudent";
	}
	@PostMapping("/updateStudent")
	public String updateStudent(@ModelAttribute Student st)
	{
		service.updateStudent(st);
		return "index";
	}
	@GetMapping ("/deleteStudent")
	public String deleteStudent(@RequestParam int roll) {
		service.deleteStudent(roll);
		return "index";
	}
	@GetMapping("/searchAllStudent")
	public  String searchAllStudent(Model model)
	{
		List<Student> stlist= service.searchAllStudent();
		model.addAttribute("studentList",stlist);
		return "displayAllStudents";
	}
	@GetMapping ("/deleteAllStudent")
	public String deleteAllStudent() {
		service.deleteAllStudent();
		return "index";
	}
	
	
	
	
	
//	@GetMapping("/hello")
//	public String sayHello()
//	{
//		return "Hello from Spring Boot";
//	}
//	@GetMapping("/bye")
//	public String sayBye()
//	{
//		return "Bye from Spring boot,";
//	}
//	@GetMapping("/newstudent")
//	public String newStudent()
//	{
//		return "Welcome ";
//	}
//	@GetMapping("/mydata")
//	public String myData()
//	{
//		return "Your name is ?";
//	}
//	@GetMapping("/data/{data}")
//	public String acceptData(@PathVariable String data)
//	{
//		return "Data recieved: "+data;
//	}
//	
//	@GetMapping("/data2")
//	public String acceptValues(@RequestParam int roll,@RequestParam String name, @RequestParam String branch, @RequestParam double cgpa, @RequestParam int yop)
//	{
//		Student st=new Student(roll,name,branch,yop,cgpa);
//		System.out.println(st);
//		return "Data recieved";
//	}
	
	
}

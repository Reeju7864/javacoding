package com.student.management.controllers.navigationController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NavigationController {
      @GetMapping("/openAddStudentPage")
      public String openAddStudentPage()
      {
    	  return "addStudent";
      }
      @GetMapping("/openUpdateStudentPage")
      public String openUpdateStudentPage()
      {
    	  return "updateStudent";
      }
      @GetMapping("/openDeleteStudentPage")
      public String openDeleteStudentPage()
      {
    	  return "deleteStudent";
      }
      @GetMapping("/openSearchStudentPage")
      public String openSearchStudentPage()
      {
    	  return "searchStudent";
      }
      
}

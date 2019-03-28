//USEUNIT CommonReporting
//USEUNIT CommonApplication

function ST00_StartApplication()
{
  Log_InitTestCase("ST00_StartApplication", "Start and Stop Application");
  Log_CurrentStep("Step 1: Start application");
  CommonApplication_StartApplication(10000);
  
  Log_CurrentStep("Step2: Close the application and store results");
  CommonReporting.Log_CurrentTestCaseStatusPass();
}
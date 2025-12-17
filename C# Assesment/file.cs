using System;

abstract class Patient
{
    public int PatientId { get; }
    public string Name { get; }
    public int Age { get; }
    public string DoctorAssigned { get; }
    public int WardNumber { get; }
    public DateTime AdmitTime { get; }

    protected Patient(int id, string name, int age, string doctor, int ward)
    {
        PatientId = id;
        Name = name;
        Age = age;
        DoctorAssigned = doctor;
        WardNumber = ward;
        AdmitTime = DateTime.Now;
    }

    public abstract double GetBaseCharge();
    public abstract string PatientType { get; }
}


class GeneralPatient : Patient
{
    public GeneralPatient(int id, string name, int age, string doctor, int ward)
        : base(id, name, age, doctor, ward) { }

    public override double GetBaseCharge() => 1000;
    public override string PatientType => "General";
}

class EmergencyPatient : Patient
{
    public EmergencyPatient(int id, string name, int age, string doctor, int ward)
        : base(id, name, age, doctor, ward) { }

    public override double GetBaseCharge() => 3000;
    public override string PatientType => "Emergency";
}

delegate double BillingStrategy(double baseAmount);

class BillEventArgs : EventArgs
{
    public int PatientId { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public string PatientType { get; set; }
    public string DoctorAssigned { get; set; }
    public int WardNumber { get; set; }
    public DateTime AdmitTime { get; set; }
    public double FinalBill { get; set; }
}


class Hospital
{
    public event EventHandler<BillEventArgs> BillGenerated;

    public void AdmitPatient(Patient patient, BillingStrategy billingLogic)
    {
        double baseCharge = patient.GetBaseCharge();
        double finalBill = billingLogic(baseCharge);

        Console.WriteLine("\n===== PATIENT BILL =====");
        Console.WriteLine($"Patient ID   : {patient.PatientId}");
        Console.WriteLine($"Name         : {patient.Name}");
        Console.WriteLine($"Age          : {patient.Age}");
        Console.WriteLine($"Type         : {patient.PatientType}");
        Console.WriteLine($"Doctor       : {patient.DoctorAssigned}");
        Console.WriteLine($"Ward No      : {patient.WardNumber}");
        Console.WriteLine($"Admit Time   : {patient.AdmitTime}");
        Console.WriteLine($"Final Amount : Rs.{finalBill}");

        OnBillGenerated(patient, finalBill);
    }

    protected void OnBillGenerated(Patient patient, double amount)
    {
        BillGenerated?.Invoke(this, new BillEventArgs
        {
            PatientId = patient.PatientId,
            Name = patient.Name,
            Age = patient.Age,
            PatientType = patient.PatientType,
            DoctorAssigned = patient.DoctorAssigned,
            WardNumber = patient.WardNumber,
            AdmitTime = patient.AdmitTime,
            FinalBill = amount
        });
    }
}

class Pharmacy
{
    public void Notify(object sender, BillEventArgs e)
    {
        Console.WriteLine($"[Pharmacy] Medicines prepared for {e.Name} (Ward {e.WardNumber})");
    }
}

class Accounts
{
    public void Notify(object sender, BillEventArgs e)
    {
        Console.WriteLine($"[Accounts] Collect Rs.{e.FinalBill} from Patient ID {e.PatientId}");
    }
}


class Program
{
    static void Main()
    {
        Hospital hospital = new Hospital();
        Pharmacy pharmacy = new Pharmacy();
        Accounts accounts = new Accounts();

        hospital.BillGenerated += pharmacy.Notify;
        hospital.BillGenerated += accounts.Notify;

        Console.Write("Enter Patient ID: ");
        int id = int.Parse(Console.ReadLine());

        Console.Write("Enter Patient Name: ");
        string name = Console.ReadLine();

        Console.Write("Enter Age: ");
        int age = int.Parse(Console.ReadLine());

        Console.Write("Doctor Assigned: ");
        string doctor = Console.ReadLine();

        Console.Write("Ward Number: ");
        int ward = int.Parse(Console.ReadLine());

        Console.WriteLine("Select Patient Type:");
        Console.WriteLine("1. General");
        Console.WriteLine("2. Emergency");
        int type = int.Parse(Console.ReadLine());

        Patient patient = type == 1
            ? new GeneralPatient(id, name, age, doctor, ward)
            : new EmergencyPatient(id, name, age, doctor, ward);

        Console.WriteLine("Select Billing Strategy:");
        Console.WriteLine("1. Add 10% Tax");
        Console.WriteLine("2. Give 5% Discount");
        int billChoice = int.Parse(Console.ReadLine());

        BillingStrategy billing =
            billChoice == 1
            ? amount => amount * 1.10
            : amount => amount * 0.95;

        hospital.AdmitPatient(patient, billing);

        Console.ReadKey();
    }
}

"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import * as z from "zod";
//import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError, FieldContent } from "@/components/ui/field";
import {Input} from "@/components/ui/input";

import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { PasswordInput } from "@/components/ui/password-input";


/*here we are defining the zod schema for form validation
we are defining the schema in parts and then combining them
using the and method of zod
this makes it easier to read and maintain the code*/
/*
const baseSchema = z.object({
    email: z.email(),
     dob: z.date().refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age <= 18;
    }, "You must be at least 18 years old"),
})

const accountSchema = z.object({
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    //coerce is for converting a string to number
    //we need to do this as by default we get the data in string format
    numberOfEmployees: z.coerce.number().optional(),
}).superRefine((data, ctx) => {
    if (data.accountType === "company") {
        if (!data.companyName) {
            ctx.addIssue({
                path: ["companyName"],
                message: "Company name is required for company accounts",
                code: "custom"
            });
        }
        if (!data.numberOfEmployees || data.numberOfEmployees <= 0) {
            ctx.addIssue({
                path: ["numberOfEmployees"],
                message: "Number of employees is required for company accounts",
                code: "custom"
            });
        }
    }})
    

const passwordSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long").refine((val) => /[A-Z]/.test(val), "Password must contain at least one uppercase letter").refine((val) => /[a-z]/.test(val), "Password must contain at least one lowercase letter").refine((val) => /[0-9]/.test(val), "Password must contain at least one number").refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), "Password must contain at least one special character"),
    passwordConfirm: z.string()
}).superRefine((data, ctx) => {
    //here data contains the data entered in the form
    //ctx is the context object which we can use to add custom errors

    if(data.password !== data.passwordConfirm){
        ctx.addIssue({
            path: ["passwordConfirm"],
            message: "Passwords do not match",
            code: "custom"
        });
    }

})

const formSchema = baseSchema.and(accountSchema).and(passwordSchema);*/


//here we are setting up the form schema
//where we are defining the type of data for each feild
const formSchema = z.object({
    email: z.email(),
    //declaring the enum
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    //coerce is for converting a string to number
    //we need to do this as by default we get the data in string format
    numberOfEmployees: z.coerce.number().optional(),
    //adding new date type fields
    dob: z.date().refine((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        return age <= 18;
    }, "You must be at least 18 years old"),
    password: z.string().min(8, "Password must be at least 8 characters long").refine((val) => /[A-Z]/.test(val), "Password must contain at least one uppercase letter").refine((val) => /[a-z]/.test(val), "Password must contain at least one lowercase letter").refine((val) => /[0-9]/.test(val), "Password must contain at least one number").refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), "Password must contain at least one special character"),
    passwordConfirm: z.string()
}).superRefine((data, ctx) => {
    //here data contains the data entered in the form
    //ctx is the context object which we can use to add custom errors

    if(data.password !== data.passwordConfirm){
        ctx.addIssue({
            path: ["passwordConfirm"],
            message: "Passwords do not match",
            code: "custom"
        });
    }
    //here we are checking if the account type is company
    //then company name and number of employees are required fields
    if (data.accountType === "company") {
        if (!data.companyName) {
            ctx.addIssue({
                path: ["companyName"],
                message: "Company name is required for company accounts",
                code: "custom"
            });
        }
        if (!data.numberOfEmployees || data.numberOfEmployees <= 0) {
            ctx.addIssue({
                path: ["numberOfEmployees"],
                message: "Number of employees is required for company accounts",
                code: "custom"
            });
        }
    }
});

export default function LoginPage() {

    //const router = useRouter()
    
    //here we are passing the zod type to useForm from react-hook-form
    //so that react-hook-form and zod can comunicate with each other
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    })

    //function to be executed when form is submitted
    function onSubmit(data: z.infer<typeof formSchema>){
        console.log("entreted the function")
        console.log(data)
    }

    const accountType = form.watch("accountType")

    return (
        <>
            <Card className="w-full max-w-sm">
                <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Create your SupportMe account</CardDescription>
            </CardHeader>
            <CardContent>
                
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                        name = "email"
                        control={form.control}
                        render = {({field, fieldState}) => (
                            // The main Field component. We use data-invalid for styling errors.
                            <Field data-invalid={fieldState.invalid ? "" : undefined}>
                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                            <Input
                            {...field}
                            id={field.name}
                            placeholder="email ID"
                            type="email"
                            aria-invalid={fieldState.invalid ? "true" : "false"}
                            />
                                {/* Show error message if validation fails */}

                            {fieldState.error && (
                                <FieldError>{fieldState.error.message}</FieldError>
                            )}
                            </Field>
                        )}
                        />

                        <Controller 
                        name="accountType"
                        control={form.control}
                        render={({field, fieldState}) => (
                            <Field
                                orientation="responsive"
                                data-invalid = {fieldState.invalid ? "this is error for select testing......" : undefined}
                                >
                                    <FieldContent>
                                        <FieldLabel htmlFor={field.name}>
                                            Account Type
                                        </FieldLabel>
                                        <FieldDescription>
                                            this is the description for select field
                                        </FieldDescription>
                                        {fieldState.error && (<FieldError>{fieldState.error.message}</FieldError>)}
                                        {/* This the select component from shadcn/ui */}
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger className="z-20">
                                                <SelectValue placeholder="Select Account Type"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                    <SelectGroup>
                                                        {/* Here we are defining the items in the select dropdown */}
                                                        <SelectLabel>Account Type</SelectLabel>
                                                        <SelectItem value="personal"> Personal</SelectItem>
                                                        <SelectItem value="company"> Company</SelectItem>
                                                    </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FieldContent>
                                </Field>
                        )}/>
                        
                        {/**here we are validating if the account type is company and then displaying additional fields */}
                        {accountType === "company" && (
                            <>
                                {/* Company Name Field */}
                                <Controller
                                name = "companyName"
                                control={form.control}
                                render = {({field, fieldState}) => (
                                    // The main Field component. We use data-invalid for styling errors.
                                    <Field data-invalid={fieldState.invalid ? "" : undefined}>
                                    <FieldLabel htmlFor={field.name}>Company Name</FieldLabel>
                                    <Input
                                    {...field}
                                    id={field.name}
                                    placeholder="Company Name"
                                    type="text"
                                    aria-invalid={fieldState.invalid ? "true" : "false"}
                                    />
                                        {/* Show error message if validation fails */}

                                    {fieldState.error && (
                                        <FieldError>{fieldState.error.message}</FieldError>
                                    )}
                                    </Field>
                                    )}
                                />

                                {/* Number of Employees Field */}
                                <Controller
                                name = "numberOfEmployees"
                                control={form.control}
                                render = {({field, fieldState}) => (
                                    // The main Field component. We use data-invalid for styling errors.
                                    <Field data-invalid={fieldState.invalid ? "" : undefined}>
                                    <FieldLabel htmlFor={field.name}>Number of Employees</FieldLabel>
                                    <Input
                                    {...field}
                                    id={field.name}
                                    placeholder="Employees"
                                    min={0}
                                    type="number"
                                    aria-invalid={fieldState.invalid ? "true" : "false"}
                                    />
                                        {/* Show error message if validation fails */}

                                    {fieldState.error && (
                                        <FieldError>{fieldState.error.message}</FieldError>
                                    )}
                                    </Field>
                                    )}
                                />
                            </>
                        )}

                                {/* DoB Field */}
                                <Controller
                                name = "dob"
                                control={form.control}
                                render = {({field, fieldState}) => {

                                    const dobFromDate = new Date();
                                    dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);
                                    
                                    return (
                                    // The main Field component. We use data-invalid for styling errors.
                                    <Field data-invalid={fieldState.invalid ? "" : undefined}>
                                        <FieldLabel htmlFor={field.name}>Date of Birth</FieldLabel>
                                        {/* Using a popover to show the date picker */}
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="normal-case justify-between" >
                                                    {field.value ? field.value.toDateString() : "Select date"}
                                                    <CalendarIcon />
                                                </Button>

                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                {/*anything that goes inside popover will be shown when the popover is triggered */}
                                                <Calendar
                                                    mode="single"
                                                    defaultMonth={field.value}
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    fixedWeeks
                                                    weekStartsOn={1}
                                                    startMonth={dobFromDate}
                                                    captionLayout="dropdown"
                                                    disabled={[
                                                        {
                                                            after: new Date(),
                                                            before: dobFromDate,
                                                        },
                                                    ]}/>
                                            </PopoverContent>
                                        </Popover>
                                    {/* Show error message if validation fails */}

                                    {fieldState.error && (
                                        <FieldError>{fieldState.error.message}</FieldError>
                                    )}
                                    </Field>
                                    )}
                                }
                                />

                                <Controller
                                    name = "password"
                                    control={form.control}
                                    render = {({field, fieldState}) => (
                                        // The main Field component. We use data-invalid for styling errors.
                                        <Field data-invalid={fieldState.invalid ? "" : undefined}>
                                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                        <PasswordInput
                                        {...field}
                                        id={field.name}
                                        placeholder="••••••••"
                                        aria-invalid={fieldState.invalid ? "true" : "false"}
                                        />
                                            {/* Show error message if validation fails */}

                                        {fieldState.error && (
                                            <FieldError>{fieldState.error.message}</FieldError>
                                        )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name = "passwordConfirm"
                                    control={form.control}
                                    render = {({field, fieldState}) => (
                                        // The main Field component. We use data-invalid for styling errors.
                                        <Field data-invalid={fieldState.invalid ? "" : undefined}>
                                        <FieldLabel htmlFor={field.name}>Confirm  Password</FieldLabel>
                                        <Input
                                        {...field}
                                        id={field.name}
                                        placeholder="••••••••"
                                        type="passsword"
                                        aria-invalid={fieldState.invalid ? "true" : "false"}
                                        />
                                            {/* Show error message if validation fails */}

                                        {fieldState.error && (
                                            <FieldError>{fieldState.error.message}</FieldError>
                                        )}
                                        </Field>
                                    )}
                                />
                            

                    </FieldGroup>
                    <Button type="submit" className="w-full mt-6">
                        Sign Up
                    </Button>
                </form>

            </CardContent>
            <CardFooter className="justify-around">
                <p>Already have an account?</p>
                <Button asChild variant="outline" size="sm">
                    <Link href="/sign-up">Login</Link>
                </Button>
            </CardFooter>
            </Card>
        </>
    )
}
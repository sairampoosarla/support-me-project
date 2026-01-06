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

import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem, SelectLabel } from "@radix-ui/react-select";

//here we are setting up the form schema
//where we are defining the type of data for each feild
const formSchema = z.object({
    email: z.email(),
    //declaring the enum
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    //coerce is for converting a string to number
    //we need to do this as by default we get the data in string format
    numberOfEmployees: z.coerce.number().optional()
})

export default function LoginPage() {

    //const router = useRouter()
    
    //here we are passing the zod type to useForm from react-hook-form
    //so that react-hook-form and zond can comunicate with each other
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
                                        
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger className="z-20">
                                                <SelectValue placeholder="Select Account Type"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Account Type</SelectLabel>
                                                        <SelectItem value="personal"> Personal</SelectItem>
                                                        <SelectItem value="company"> Company</SelectItem>
                                                    </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FieldContent>
                                </Field>
                        )}/>


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
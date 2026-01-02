"use client"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import * as z from "zod";
//import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldGroup, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field";
import {Input} from "@/components/ui/input";

//here we are setting up the form schema
//where we are defining the type of data for each feild
const formSchema = z.object({
    email: z.email(),
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

                    </FieldGroup>
                    <Button type="submit" className="w-full">
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
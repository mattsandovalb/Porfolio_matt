<?php

use App\Http\Controllers\WorksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('works', WorksController::class);
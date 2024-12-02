<?php

namespace App\Filament\Resources\StudetResource\Pages;

use App\Filament\Resources\StudetResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditStudet extends EditRecord
{
    protected static string $resource = StudetResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
            Actions\DeleteAction::make(),
        ];
    }
}
